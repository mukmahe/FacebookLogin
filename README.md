# FacebookLogin
###Contains vanila case of facebook login

<a>
I was facing issue if I was trying to signUp with a email id as fb server was addressing me as malicious user and was giving me error "Something went Wrong" so I automated the login flow instead of singUp 

To keep things simple and avoid logout automation I have kept 2 different spec for login-happy-path and login-negative-path going forward this can be kept as same file also if I automate the logout case also. 

Approach: 
Here we are verifying that a person with correct email and password combination will be able to login and if a person enters wrong email id, he will get error message 

SetUp and Run: 
Make sure your machine has latest version of node.js if not please install node.js <br/>
Once done run => npm i (it will install all npm dependencies) <br/>
Now update the test data at location cypress/fixtures/{test-case-name} <br/>  
Then run npx cypress open <br/>
Select relevant browser from the top right corner <br/>
Then select run 2 integration specs <br/>
It will run both the test cases <br/>
To keep things simple we have not introduced parallel running and jenkins integration for now(can be scaled later) 


Please contact me for any query
</a>
