namespace Microsoft.AspNetCore.Mvc
{
    public static class ControllerExtension 
    {
        public static object GetNoLayoutParams(this Controller controller)
        {
            if(controller.Request.Query.ContainsKey("nolayout"))
            {
                return new { nolayout = true };
            }
            else return new {};
        }
    }
}
