from app import app
from subprocess import Popen,PIPE

@app.route('/')
def index():
    process = Popen(['ls', '.'], stdout=PIPE)
    output, error = process.communicate()
    return output