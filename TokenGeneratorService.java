package io.tokenvalidator;

import java.util.Random;

import org.springframework.stereotype.Service;

@Service
public class TokenGeneratorService {

	public String generateToken(String availableDigits) {
		StringBuilder token = new StringBuilder();
        Random random = new Random();
        for (int i = 0; i < 4; i++) {
            for (int j = 0; j < 4; j++) {
                token.append(availableDigits.charAt(random.nextInt(availableDigits.length())));
            }
            if (i < 3) {
                token.append("-");
            }
        }
        return token.toString();
    }
	

}
