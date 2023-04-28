import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerZodiacCancerIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerZodiacCancerIcon = React.forwardRef<SVGSVGElement, TablerZodiacCancerIconProps>(
	function TablerZodiacCancerIcon(props, ref) {
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
				<path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
				<path d="M18 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
				<path d="M3 12a10 6.5 0 0 1 14 -6.5" />
				<path d="M21 12a10 6.5 0 0 1 -14 6.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerZodiacCancerIcon.displayName = "TablerZodiacCancerIcon";
}
