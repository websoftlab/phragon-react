import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherBarChart2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherBarChart2Icon = React.forwardRef<SVGSVGElement, FeatherBarChart2IconProps>(
	function FeatherBarChart2Icon(props, ref) {
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
				<line x1="18" y1="20" x2="18" y2="10" />
				<line x1="12" y1="20" x2="12" y2="4" />
				<line x1="6" y1="20" x2="6" y2="14" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherBarChart2Icon.displayName = "FeatherBarChart2Icon";
}
