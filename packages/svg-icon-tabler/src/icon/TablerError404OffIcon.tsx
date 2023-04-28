import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerError404OffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerError404OffIcon = React.forwardRef<SVGSVGElement, TablerError404OffIconProps>(
	function TablerError404OffIcon(props, ref) {
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
				<path d="M3 7v4a1 1 0 0 0 1 1h3" />
				<path d="M7 7v10" />
				<path d="M10 10v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-2m0 -4v-2a1 1 0 0 0 -1 -1h-2" />
				<path d="M17 7v4a1 1 0 0 0 1 1h3" />
				<path d="M21 7v10" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerError404OffIcon.displayName = "TablerError404OffIcon";
}
