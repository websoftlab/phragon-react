import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHeartHandshakeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHeartHandshakeIcon = React.forwardRef<SVGSVGElement, TablerHeartHandshakeIconProps>(
	function TablerHeartHandshakeIcon(props, ref) {
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
				<path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
				<path d="M12 6l-3.293 3.293a1 1 0 0 0 0 1.414l.543 .543c.69 .69 1.81 .69 2.5 0l1 -1a3.182 3.182 0 0 1 4.5 0l2.25 2.25" />
				<path d="M12.5 15.5l2 2" />
				<path d="M15 13l2 2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerHeartHandshakeIcon.displayName = "TablerHeartHandshakeIcon";
}
