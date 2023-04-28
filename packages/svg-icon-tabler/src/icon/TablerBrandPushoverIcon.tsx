import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandPushoverIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandPushoverIcon = React.forwardRef<SVGSVGElement, TablerBrandPushoverIconProps>(
	function TablerBrandPushoverIcon(props, ref) {
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
				<path d="M6.16 10.985c-.83 -1.935 1.53 -7.985 8.195 -7.985c3.333 0 4.645 1.382 4.645 3.9c0 2.597 -2.612 6.1 -9 6.1" />
				<path d="M12.5 6l-5.5 15" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandPushoverIcon.displayName = "TablerBrandPushoverIcon";
}
