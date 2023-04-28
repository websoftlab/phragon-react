import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandCampaignmonitorIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandCampaignmonitorIcon = React.forwardRef<SVGSVGElement, TablerBrandCampaignmonitorIconProps>(
	function TablerBrandCampaignmonitorIcon(props, ref) {
		const { children, ...rest } = props;
		return (
			<SvgIcon
				stroke="currentColor"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
				{...rest}
				ref={ref}
				size={24}
				icon={undefined}
				fill="none"
			>
				<path d="M3 18l9 -6.462l-9 -5.538v12h18v-12l-9 5.538" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandCampaignmonitorIcon.displayName = "TablerBrandCampaignmonitorIcon";
}
