import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerExternalLinkIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerExternalLinkIcon = React.forwardRef<SVGSVGElement, TablerExternalLinkIconProps>(
	function TablerExternalLinkIcon(props, ref) {
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
				<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
				<path d="M15 3 L21 3 L21 9" />
				<path d="M10 14 L21 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerExternalLinkIcon.displayName = "TablerExternalLinkIcon";
}
