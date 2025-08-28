pipeline {
   agent any

   stages {
      stage('Install docker image') {
         agent {
            docker { 
               image 'mcr.microsoft.com/playwright:v1.55.0-noble' 
            }
         }
         steps {
            echo 'Docker image is ready'
         }
      }

      stage('Install') {
         steps {
            echo 'Installing dependencies...'
            sh 'npm ci'
         }
      }

      stage('Run Playwright Tests & Generate Allure Results') {
         steps {
            sh 'npx playwright test --reporter=junit,allure-playwright'
            stash name: 'allure-results', includes: 'allure-results/*'
         }
      }
   }

   post {
      always {
         unstash name: 'allure-results'
         allure([
            includeProperties: false,
            jdk: '',
            properties: [],
            reportBuildPolicy: 'ALWAYS',
            results: [[path: 'allure-results']]
         ])
      }
   }
}
