pipeline {
   agent { docker { image 'mcr.microsoft.com/playwright:v1.55.0-noble' } }

   stages {
      stage('Install') {
         steps {
            echo 'Installing dependencies...'
            sh 'npm ci'
         }
      }

      stage('Run Playwright Tests') {
         steps {
            sh 'npx playwright test --reporter=junit --output=results.xml'
         }
      }
      stage('Publish Test Report') {
         steps {
            junit 'playwright-report/results.xml'
         }
      }
   }
}