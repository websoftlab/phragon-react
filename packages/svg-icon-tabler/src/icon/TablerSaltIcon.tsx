import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSaltIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSaltIcon = React.forwardRef<SVGSVGElement, TablerSaltIconProps>(function TablerSaltIcon(props, ref) {
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
			<path d="M12 13v.01" />
			<path d="M10 16v.01" />
			<path d="M14 16v.01" />
			<path d="M7.5 8h9l-.281 -2.248a2 2 0 0 0 -1.985 -1.752h-4.468a2 2 0 0 0 -1.986 1.752l-.28 2.248z" />
			<path d="M7.5 8l-1.612 9.671a2 2 0 0 0 1.973 2.329h8.278a2 2 0 0 0 1.973 -2.329l-1.612 -9.671" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSaltIcon.displayName = "TablerSaltIcon";
}
