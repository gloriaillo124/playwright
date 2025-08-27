pipeline {
    agent { 
        docker { 
            steps {
                echo 'Running Playwright in Docker'
                sh '''
                docker pull mcr.microsoft.com/playwright:v1.49.0-jammy
                docker run --rm -v $PWD:/work -w /work mcr.microsoft.com/playwright:v1.49.0-jammy sh -c "npm ci && npx playwright test"
                '''
            } 
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
