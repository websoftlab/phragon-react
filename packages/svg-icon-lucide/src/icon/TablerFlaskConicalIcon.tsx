import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFlaskConicalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFlaskConicalIcon = React.forwardRef<SVGSVGElement, TablerFlaskConicalIconProps>(
	function TablerFlaskConicalIcon(props, ref) {
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
				<path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" />
				<path d="M8.5 2h7" />
				<path d="M7 16h10" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFlaskConicalIcon.displayName = "TablerFlaskConicalIcon";
}
