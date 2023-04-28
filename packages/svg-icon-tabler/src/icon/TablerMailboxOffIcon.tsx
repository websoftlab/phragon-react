import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMailboxOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMailboxOffIcon = React.forwardRef<SVGSVGElement, TablerMailboxOffIconProps>(
	function TablerMailboxOffIcon(props, ref) {
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
				<path d="M10 21v-6.5a3.5 3.5 0 0 0 -7 0v6.5h18m0 -4v-2a4 4 0 0 0 -4 -4h-2m-4 0h-4.5" />
				<path d="M12 8v-5h4l2 2l-2 2h-4" />
				<path d="M6 15h1" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMailboxOffIcon.displayName = "TablerMailboxOffIcon";
}
