import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherMinimize2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherMinimize2Icon = React.forwardRef<SVGSVGElement, FeatherMinimize2IconProps>(
	function FeatherMinimize2Icon(props, ref) {
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
				<polyline points="4 14 10 14 10 20" />
				<polyline points="20 10 14 10 14 4" />
				<line x1="14" y1="10" x2="21" y2="3" />
				<line x1="3" y1="21" x2="10" y2="14" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherMinimize2Icon.displayName = "FeatherMinimize2Icon";
}
