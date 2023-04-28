import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSocialOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSocialOffIcon = React.forwardRef<SVGSVGElement, TablerSocialOffIconProps>(
	function TablerSocialOffIcon(props, ref) {
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
				<path d="M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M17.57 17.602a2 2 0 0 0 2.83 2.827" />
				<path d="M11.113 11.133a3 3 0 1 0 3.765 3.715" />
				<path d="M12 7v1" />
				<path d="M6.7 17.8l2.8 -2" />
				<path d="M17.3 17.8l-2.8 -2" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSocialOffIcon.displayName = "TablerSocialOffIcon";
}
