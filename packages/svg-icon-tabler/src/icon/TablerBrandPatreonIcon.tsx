import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandPatreonIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandPatreonIcon = React.forwardRef<SVGSVGElement, TablerBrandPatreonIconProps>(
	function TablerBrandPatreonIcon(props, ref) {
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
				<path d="M3 3h3v18h-3z" />
				<path d="M15 9.5m-6.5 0a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0 -13 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandPatreonIcon.displayName = "TablerBrandPatreonIcon";
}
