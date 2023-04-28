import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerInfoSmallIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerInfoSmallIcon = React.forwardRef<SVGSVGElement, TablerInfoSmallIconProps>(
	function TablerInfoSmallIcon(props, ref) {
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
				<path d="M12 9h.01" />
				<path d="M11 12h1v4h1" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerInfoSmallIcon.displayName = "TablerInfoSmallIcon";
}
