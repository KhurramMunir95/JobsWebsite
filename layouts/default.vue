<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
body{
  background-color:#E7E4E3;
}

html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.search{
  background-image: url(../Images/backgroundImg.png);
  border-radius: 0;
  padding: 30px;
  background-size: cover;
}

img{
  max-width: 200px;
  min-width: 50px;
  height: 140px;
  /* height: auto; */
}

ul.left li{
  line-height: 20px;
  margin: 10px;
}

ul{
			list-style-type: none;
      text-align: left;
		}

		ul li {
			line-height: 30px;
      /* clear: both; */
      display: inline;
		}
    div.card-footer{
      /* top: -60px; */
      position: relative;
      border: none;
    }
    div.card-footer span {
      font-size: 12px;
      float: right;
    }

    div.card{
      width: 100%;
      margin: 20px;
      height: auto;
      padding: 0;
    }  

		div.card-header{
			padding: 10px;
      height: 60px;
      /* max-width: 100%; */
      
		}

		div.card-header img{
			max-width: 100px;
      height: 100px;
      flex-shrink: 0;
      object-fit: contain;
		}
    div.bottom{
      display: inline-flex;
      margin-top: -20px;
    }
    div.bottom span{
			font-size: 12px;
			float: right;
		
		}

    div.card-footer{
      margin-top: 3px;
    }

@media(max-width: 992px){
  .search{
    width: 90%;
    margin: auto;
  }
  
 body{
   margin-right: 20px;
 }

 h6{
   font-size: 14px;;
 }

 div.card-footer{
   margin-top: 24px;
 }
 
 
 span#bottom{
  padding: 10px;
  margin-top: 30px;
  clear:left;
  text-align: left;
  float: right;
  width:130px;
  object-fit: contain;
  }
}


</style>
