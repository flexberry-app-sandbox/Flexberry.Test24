﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Test2
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// ПД.
    /// </summary>
    // *** Start programmer edit section *** (ПД CustomAttributes)

    // *** End programmer edit section *** (ПД CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ПДE", new string[] {
            "серия as \'Серия\'",
            "номер as \'Номер\'",
            "ID as \'ID\'",
            "Имя as \'Имя\'"})]
    [View("ПДL", new string[] {
            "серия as \'Серия\'",
            "номер as \'Номер\'",
            "ID as \'ID\'",
            "Имя as \'Имя\'"})]
    public class ПД : IIS.Test2.Сотрудники
    {
        
        private string fсерия;
        
        private string fномер;
        
        // *** Start programmer edit section *** (ПД CustomMembers)

        // *** End programmer edit section *** (ПД CustomMembers)

        
        /// <summary>
        /// номер.
        /// </summary>
        // *** Start programmer edit section *** (ПД.номер CustomAttributes)

        // *** End programmer edit section *** (ПД.номер CustomAttributes)
        [StrLen(255)]
        public virtual string номер
        {
            get
            {
                // *** Start programmer edit section *** (ПД.номер Get start)

                // *** End programmer edit section *** (ПД.номер Get start)
                string result = this.fномер;
                // *** Start programmer edit section *** (ПД.номер Get end)

                // *** End programmer edit section *** (ПД.номер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПД.номер Set start)

                // *** End programmer edit section *** (ПД.номер Set start)
                this.fномер = value;
                // *** Start programmer edit section *** (ПД.номер Set end)

                // *** End programmer edit section *** (ПД.номер Set end)
            }
        }
        
        /// <summary>
        /// серия.
        /// </summary>
        // *** Start programmer edit section *** (ПД.серия CustomAttributes)

        // *** End programmer edit section *** (ПД.серия CustomAttributes)
        [StrLen(255)]
        public virtual string серия
        {
            get
            {
                // *** Start programmer edit section *** (ПД.серия Get start)

                // *** End programmer edit section *** (ПД.серия Get start)
                string result = this.fсерия;
                // *** Start programmer edit section *** (ПД.серия Get end)

                // *** End programmer edit section *** (ПД.серия Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПД.серия Set start)

                // *** End programmer edit section *** (ПД.серия Set start)
                this.fсерия = value;
                // *** Start programmer edit section *** (ПД.серия Set end)

                // *** End programmer edit section *** (ПД.серия Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ПДE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПДE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПДE", typeof(IIS.Test2.ПД));
                }
            }
            
            /// <summary>
            /// "ПДL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПДL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПДL", typeof(IIS.Test2.ПД));
                }
            }
        }
    }
}
