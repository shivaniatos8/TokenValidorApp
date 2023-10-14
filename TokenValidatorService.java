package io.tokenvalidator;

import org.springframework.stereotype.Service;

@Service
public class TokenValidatorService {

	public boolean isValidToken(String token) {
		
		String sanitizedToken = token.replaceAll("-", "");
        int sum = 0;
        boolean alternate = false;
        for (int i = sanitizedToken.length() - 1; i >= 0; i--) {
            int digit = Character.getNumericValue(sanitizedToken.charAt(i));
            if (alternate) {
                digit *= 2;
                if (digit > 9) {
                    digit -= 9;
                }
            }
            sum += digit;
            alternate = !alternate;
        }
        return (sum % 10 == 0);
		
	}

}
