import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerKeyframesIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerKeyframesIcon = React.forwardRef<SVGSVGElement, TablerKeyframesIconProps>(
	function TablerKeyframesIcon(props, ref) {
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
				<path d="M9.225 18.412a1.595 1.595 0 0 1 -1.225 .588c-.468 0 -.914 -.214 -1.225 -.588l-4.361 -5.248a1.844 1.844 0 0 1 0 -2.328l4.361 -5.248a1.595 1.595 0 0 1 1.225 -.588c.468 0 .914 .214 1.225 .588l4.361 5.248a1.844 1.844 0 0 1 0 2.328l-4.361 5.248z" />
				<path d="M17 5l4.586 5.836a1.844 1.844 0 0 1 0 2.328l-4.586 5.836" />
				<path d="M13 5l4.586 5.836a1.844 1.844 0 0 1 0 2.328l-4.586 5.836" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerKeyframesIcon.displayName = "TablerKeyframesIcon";
}
