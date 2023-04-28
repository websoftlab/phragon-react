import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandFortniteIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandFortniteIcon = React.forwardRef<SVGSVGElement, TablerBrandFortniteIconProps>(
	function TablerBrandFortniteIcon(props, ref) {
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
				<path d="M8 3h7.5l-.5 4h-3v3h3v3.5h-3v6.5l-4 1z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandFortniteIcon.displayName = "TablerBrandFortniteIcon";
}
