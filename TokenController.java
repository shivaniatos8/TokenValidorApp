package io.tokenvalidator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class TokenController {
	
	@Autowired
    private TokenGeneratorService tokenGeneratorService;

    @Autowired
    private TokenValidatorService tokenValidatorService;

	@PostMapping("/generateToken")
    public ResponseEntity<String> generateToken(@RequestBody String availableDigits) {
        String token = tokenGeneratorService.generateToken(availableDigits);
        return ResponseEntity.ok(token);
    }

    @PostMapping("/validateToken")
    public ResponseEntity<Boolean> validateToken(@RequestBody String token) {
        boolean isValid = tokenValidatorService.isValidToken(token);
        return ResponseEntity.ok(isValid);
    }
	

}
