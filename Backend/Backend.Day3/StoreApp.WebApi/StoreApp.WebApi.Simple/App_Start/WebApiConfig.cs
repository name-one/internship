using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using Newtonsoft.Json.Serialization;
using StoreApp.WebApi.Simple.Models;
using StoreApp.WebApi.Simple.Repositories;
using StoreApp.WebApi.Simple.Repositories.Entity;

namespace StoreApp.WebApi.Simple
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();
            
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            config.Formatters.JsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            config.Formatters.JsonFormatter.UseDataContractJsonSerializer = false;

            Services.Add<IStoresRepository>(() => new StoresRepository(new DatabaseContext()));
            Services.Add<IProductsRepository>(() => new ProductsRepository(new DatabaseContext()));
        }
    }
}
