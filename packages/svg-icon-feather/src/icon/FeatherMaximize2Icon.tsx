import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherMaximize2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherMaximize2Icon = React.forwardRef<SVGSVGElement, FeatherMaximize2IconProps>(
	function FeatherMaximize2Icon(props, ref) {
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
				<polyline points="15 3 21 3 21 9" />
				<polyline points="9 21 3 21 3 15" />
				<line x1="21" y1="3" x2="14" y2="10" />
				<line x1="3" y1="21" x2="10" y2="14" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherMaximize2Icon.displayName = "FeatherMaximize2Icon";
}
