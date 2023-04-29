import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherChevronUpIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherChevronUpIcon = React.forwardRef<SVGSVGElement, FeatherChevronUpIconProps>(
	function FeatherChevronUpIcon(props, ref) {
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
				<polyline points="18 15 12 9 6 15" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherChevronUpIcon.displayName = "FeatherChevronUpIcon";
}
