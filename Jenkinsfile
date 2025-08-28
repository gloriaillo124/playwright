pipeline {
    agent any

    stages {
        stage('Install') {
            agent {
                docker {
                    image 'mcr.microsoft.com/playwright:v1.55.0-noble'
                    args '--ipc=host'
                }
            }
            stages{
                stage('install depencies'){
                  steps{
                      sh 'npm ci'
                  }
                }
                stage('Run tests and generate reports'){
                  steps{
                      sh 'npx playwright test --reporter=junit,allure-playwright'
                  }
                }
                stage('stash allure report'){
                  steps{
                      stash name: 'allure-results', includes: 'allure-results/*'
                      stash name: 'junit-report', includes: 'playwright-report/results.xml*'

                  }
                }
            }
        }
    }

    post {
        always {
            unstash 'allure-results'
            unstash 'junit-report'
            junit 'junit-report'
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