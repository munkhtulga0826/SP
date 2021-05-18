<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/global.css" />
    <link rel="stylesheet" href="css/validator.css" />
    <title>Super Validator</title>
</head>

<body>
    <div class="centerer">
        <div class="form-container">
            <form id="form" name="form" onsubmit="return validateForm()">
                <h2 style="text-align: center; padding-top:20px;">Super Validator</h2>
                <div class="group">
                    <label for="lastname">Овог</label>
                    <input type="text" id="lastname" name="lastname">
                    <p id="lastname-wrong" class="wrong-input"></p>
                </div>
                <div class="group">
                    <label for="firstname">Нэр</label>
                    <input type="text" id="firstname" name="firstname">
                    <p id="firstname-wrong" class="wrong-input"></p>
                </div>
                <div class="group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email">
                    <p id="email-wrong" class="wrong-input"></p>
                </div>
                
                <div class="group">
                    <label for="birthday">Төрсөн он</label>
                    <input type="date" id="birthday" name="birthday">
                    <p id="birthday-wrong" class="wrong-input"></p>
                </div>
                <div class="group">
                    <label for="regnumber">Рэгистэрийн Дугаар</label>
                    <input type="text" id="regnumber" name="regnumber">
                    <p id="regnumber-wrong" class="wrong-input"></p>
                </div>
                <div class="group">
                    <label for="password">Нууц үг</label>
                    <input type="password" id="password" name="password">
                    <p id="password-wrong" class="wrong-input"></p>
                </div>
                <div class="submit">
                    <input type="submit">
                </div>
            </form>
        </div>
    </div>
    <script src="js/validator.js"></script>
</body>

</html>
