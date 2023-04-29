import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherNavigation2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherNavigation2Icon = React.forwardRef<SVGSVGElement, FeatherNavigation2IconProps>(
	function FeatherNavigation2Icon(props, ref) {
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
				<polygon points="12 2 19 21 12 17 5 21 12 2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherNavigation2Icon.displayName = "FeatherNavigation2Icon";
}
