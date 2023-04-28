import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandCouchsurfingIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandCouchsurfingIcon = React.forwardRef<SVGSVGElement, TablerBrandCouchsurfingIconProps>(
	function TablerBrandCouchsurfingIcon(props, ref) {
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
				<path d="M3.1 13c3.267 0 5.9 -.167 7.9 -.5c3 -.5 4 -2 4 -3.5a3 3 0 1 0 -6 0c0 1.554 1.807 3 3 4c1.193 1 2 2.5 2 3.5a1.5 1.5 0 1 1 -3 0c0 -2 4 -3.5 7 -3.5h2.9" />
				<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandCouchsurfingIcon.displayName = "TablerBrandCouchsurfingIcon";
}
