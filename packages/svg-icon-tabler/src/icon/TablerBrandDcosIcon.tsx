import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandDcosIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandDcosIcon = React.forwardRef<SVGSVGElement, TablerBrandDcosIconProps>(
	function TablerBrandDcosIcon(props, ref) {
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
				<path d="M3 18l18 -12h-18l9 14l9 -14v10l-18 -10z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandDcosIcon.displayName = "TablerBrandDcosIcon";
}
