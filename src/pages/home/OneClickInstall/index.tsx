import React from "react";
import { BodyText, SectionTitle } from "../../../styledComponents/components";
import "./FeaturesSection.css";
import MediaSection from "./MediaSection";
import TextContent from './TextContent/TextContent'

const OneClickInstall = () => {
    return (
        <div className="global_container">
            <div className="features__main__container">
                <section className="features__main container">
                    <MediaSection />
                    {/* .features__main__icons */}
                    <TextContent />
                    {/* .features__main__content */}
                </section>
                {/* .features__main */}
            </div>
            {/* .features__main__container */}
        </div>
    );
};

export default OneClickInstall;
