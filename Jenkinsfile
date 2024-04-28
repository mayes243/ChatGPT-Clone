pipeline {
    agent any

    stages {
        stage("checkout") {
            steps {
                checkout scm
            }
        }

        stage("Setup Environment") {
            steps {
                // Install Node.js using nvm
                sh 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash'
                sh 'source ~/.bashrc'
                sh 'nvm install node'
            }
        }

        stage("Test") {
            steps {
                sh 'npm start'
            }
        }

        stage("Build") {
            steps {
                sh 'npm run build'
            }
        }

        stage("Build Image") {
            steps {
                sh 'docker build -t my-node-app:1.0 .'
            }
        }
    }
}
