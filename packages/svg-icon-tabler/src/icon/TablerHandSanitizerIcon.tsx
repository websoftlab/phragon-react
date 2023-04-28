import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHandSanitizerIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHandSanitizerIcon = React.forwardRef<SVGSVGElement, TablerHandSanitizerIconProps>(
	function TablerHandSanitizerIcon(props, ref) {
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
				<path d="M7 21h10v-10a3 3 0 0 0 -3 -3h-4a3 3 0 0 0 -3 3v10z" />
				<path d="M15 3h-6a2 2 0 0 0 -2 2" />
				<path d="M12 3v5" />
				<path d="M12 11v4" />
				<path d="M10 13h4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerHandSanitizerIcon.displayName = "TablerHandSanitizerIcon";
}
