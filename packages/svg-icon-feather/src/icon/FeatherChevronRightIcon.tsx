import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherChevronRightIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherChevronRightIcon = React.forwardRef<SVGSVGElement, FeatherChevronRightIconProps>(
	function FeatherChevronRightIcon(props, ref) {
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
				<polyline points="9 18 15 12 9 6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherChevronRightIcon.displayName = "FeatherChevronRightIcon";
}
