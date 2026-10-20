package iam.caoba.common;

/**
 * 璧勬簮涓嶅瓨鍦ㄥ紓甯革細鏄犲皠涓?HTTP 404锛? * 鍖哄埆浜?500銆屾湇鍔″櫒鍐呴儴閿欒銆嶃€? */
public class ResourceNotFoundException extends RuntimeException {
    public ResourceNotFoundException(String message) {
        super(message);
    }
}