import {
  isRouteErrorResponse,
  useRouteError,
  useNavigate,
} from "react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, AlertTriangle, AlertCircle, HelpCircle } from "lucide-react";

export default function ErrorBoundary() {
  const error = useRouteError();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  if (isRouteErrorResponse(error)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="max-w-md w-full">
          <CardContent className="p-8 text-center">
            <div className="mb-4">
              <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {error.status} {error.statusText}
            </h1>
            <p className="text-gray-600 mb-6">{error.data}</p>
            <Button onClick={handleGoBack} className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <Card className="max-w-2xl w-full">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <AlertCircle className="w-8 h-8 text-red-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong</h1>
              <p className="text-red-600 font-medium">{error.message}</p>
            </div>
            
            <details className="mb-6">
              <summary className="cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900 mb-2">
                View technical details
              </summary>
              <pre className="bg-gray-50 p-4 rounded-lg text-xs text-gray-800 overflow-auto border">
                {error.stack}
              </pre>
            </details>
            
            <div className="text-center">
              <Button onClick={handleGoBack} className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  } else {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="max-w-md w-full">
          <CardContent className="p-8 text-center">
            <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <HelpCircle className="w-8 h-8 text-gray-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Unknown Error</h1>
            <Button onClick={handleGoBack} className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }
}
