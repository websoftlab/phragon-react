import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFlaskConicalOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFlaskConicalOffIcon = React.forwardRef<SVGSVGElement, TablerFlaskConicalOffIconProps>(
	function TablerFlaskConicalOffIcon(props, ref) {
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
				<path d="M10 10 4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-1.272-2.542" />
				<path d="M10 2v2.343" />
				<path d="M14 2v6.343" />
				<path d="M8.5 2h7" />
				<path d="M7 16h9" />
				<path d="M2 2 L22 22" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFlaskConicalOffIcon.displayName = "TablerFlaskConicalOffIcon";
}
