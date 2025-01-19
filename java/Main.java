import java.io.IOException;
import java.net.InetSocketAddress;

import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpExchange;

public class Main {
    public static void main(String[] args) throws IOException {
        HttpServer server = HttpServer.create(new InetSocketAddress(8000), 0);
        server.createContext("/", new MyHandler());
        server.setExecutor(null);
        server.start();
        System.out.println("Server started on port 8000");
    }

    static class MyHandler implements HttpHandler {
        public void handle(HttpExchange exchange) throws IOException {
            String response = "<!DOCTYPE html>" +
                "<html>" +
                "<head>" +
                "<title>Java-based Website</title>" +
                "<link rel='stylesheet' href='/main/css/style.css'>" +  // Adjusted path
                "</head>" +
                "<body>" +
                "<h1>Welcome to my Java-based Website!</h1>" +
                "<button id='myButton'>Click me</button>" +
                "<script>" + 
                "document.addEventListener('DOMContentLoaded', (event) => {" +
                "    document.getElementById('myButton').addEventListener('click', () => {" +
                "        alert('boo!');" +
                "    });" +
                "});" +
                "</script>" +
                "</body>" +
                "</html>";
            exchange.sendResponseHeaders(200, response.length());
            exchange.getResponseBody().write(response.getBytes());
            exchange.getResponseBody().close();
        }
    }
}
