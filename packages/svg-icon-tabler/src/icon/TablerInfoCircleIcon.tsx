import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerInfoCircleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerInfoCircleIcon = React.forwardRef<SVGSVGElement, TablerInfoCircleIconProps>(
	function TablerInfoCircleIcon(props, ref) {
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
				<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
				<path d="M12 9h.01" />
				<path d="M11 12h1v4h1" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerInfoCircleIcon.displayName = "TablerInfoCircleIcon";
}
