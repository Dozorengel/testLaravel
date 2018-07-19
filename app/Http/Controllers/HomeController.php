<?php

namespace App\Http\Controllers;

//use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use PhpParser\Builder\Class_;
use JonnyW\PhantomJs\Client;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        return view('home');
    }

    public function capture() {
        $url = 'https://www.facebook.com/sergei.sporyshev.93/posts/645330239162026';

        $client = Client::getInstance();
        $client->getEngine()->setPath('..\bin\phantomjs.exe');

        $request  = $client->getMessageFactory()->createCaptureRequest($url);

        $response = $client->getMessageFactory()->createResponse();

        $file = '../bin/file.jpg';

        $request->setOutputFile($file);

        $client->send($request, $response);

        if($response->getStatus() === 200) {
            // Dump the requested page content
            echo $response->getContent();
            return "Successfully captured";
        }
    }
}
