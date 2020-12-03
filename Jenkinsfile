#!groovy​

@Library("jenkins-global-library@release/0.9.x") _

import com.roche.pfdevops.build.*
import com.roche.pfdevops.common.PipelineContext
import com.roche.pfdevops.common.utils.Version
import com.roche.pfdevops.scm.branching.ModelType

devopsPipeline()
{
	catchError
	{
		nodeDocker
		{
			Builder npmBuilder
			deleteDir()

			stageCheckout(stashLabel: "checkout-scm")
			{
				//PostBuild steps on checkout
			}

			nodeNpm(unstashLabel: "checkout-scm", imageName:"docker.repository.kiosk.roche.com/pf-devops/jenkins-build-agent", version: "1.0.3", parameters: "")
			{
				stage("Configure")
				{
					npmBuilder = PipelineContext.instance.factory.newNpmBuilder(PipelineContext.instance.scmBranchModel,Builder.PROJECT_LOCATION,[pathToPublish:"build-prod"])
				}

				stage("Build")
				{
					npmBuilder.execute("run build")
				}

				stageThrowsOnBuildStatusFailure("Test")
				{
					try
					{
						npmBuilder.execute("run test")
					} finally {
						PipelineContext.instance.publishArtifactsPattern("reports/*.*", "test/")
						PipelineContext.instance.publishArtifactsPattern("snapshots/*.*", "snapshots/")
						junit "reports/*.xml"
					}
				}

				 if(env.BRANCH_NAME == "master")
				 {
					stage('SonarQube analysis')
					{
						withSonarQubeEnv('sonarFoundations') {
							npmBuilder.execute("run sonar")
						}
					}

					stage("Quality Gate")
					{
						timeout(time: 20, unit: 'MINUTES') {
							// Just in case something goes wrong, pipeline will be killed after a timeout
							def qg = waitForQualityGate() // Reuse taskId previously collected by withSonarQubeEnv
							if (qg.status == 'ERROR') {
								currentBuild.result = 'UNSTABLE' // of FAILURE
								//error "Pipeline aborted due to quality gate failure: ${qg.status}"
							}
						}
					}
				 }
        	}

			npmBuilder.publish()
		}
	}
}
executeIfBuildStatusNotSuccess
{
	PipelineContext.instance.factory.newEmail().send()
}

