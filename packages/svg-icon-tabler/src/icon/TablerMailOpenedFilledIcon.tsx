import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMailOpenedFilledIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMailOpenedFilledIcon = React.forwardRef<SVGSVGElement, TablerMailOpenedFilledIconProps>(
	function TablerMailOpenedFilledIcon(props, ref) {
		const { children, ...rest } = props;
		return (
			<SvgIcon
				fill="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				{...rest}
				ref={ref}
				size={24}
				icon={undefined}
				strokeWidth={0}
				stroke="none"
			>
				<path d="M14.872 14.287l6.522 6.52a2.996 2.996 0 0 1 -2.218 1.188l-.176 .005h-14a2.995 2.995 0 0 1 -2.394 -1.191l6.521 -6.522l2.318 1.545l.116 .066a1 1 0 0 0 .878 0l.116 -.066l2.317 -1.545z" />
				<path d="M2 9.535l5.429 3.62l-5.429 5.43z" />
				<path d="M22 9.535v9.05l-5.43 -5.43z" />
				<path d="M12.44 2.102l.115 .066l8.444 5.629l-8.999 6l-9 -6l8.445 -5.63a1 1 0 0 1 .994 -.065z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMailOpenedFilledIcon.displayName = "TablerMailOpenedFilledIcon";
}
