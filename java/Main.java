package java;


import java.io.IOException;
import java.net.InetSocketAddress;

import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpExchange;
import java.nio.file.Files;
import java.nio.file.Paths;  // Add these imports

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
            byte[] response = Files.readAllBytes(Paths.get("../html/index.html"));  // Adjusted path
            exchange.sendResponseHeaders(200, response.length);
            exchange.getResponseBody().write(response);
            exchange.getResponseBody().close();
        }
    }
}
