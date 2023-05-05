import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCheckCircle2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCheckCircle2Icon = React.forwardRef<SVGSVGElement, TablerCheckCircle2IconProps>(
	function TablerCheckCircle2Icon(props, ref) {
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
				<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
				<path d="m9 12 2 2 4-4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCheckCircle2Icon.displayName = "TablerCheckCircle2Icon";
}
