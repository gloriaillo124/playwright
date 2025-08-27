pipeline {
    agent { 
        docker { 
            image 'mcr.microsoft.com/playwright:v1.49.0-jammy' 
        } 
    }
    stages {
        stage('Install dependencies') {
            steps {
                echo 'install dependencies ...'
                sh 'npm ci'
            }
        }
        stage('Run tests') {
            steps { 
                echo 'run test ...'
                sh 'npx playwright test'
            }
        }
        
    }
}
