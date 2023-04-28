import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSchemaIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSchemaIcon = React.forwardRef<SVGSVGElement, TablerSchemaIconProps>(function TablerSchemaIcon(
	props,
	ref
) {
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
			<path d="M5 2h5v4h-5z" />
			<path d="M15 10h5v4h-5z" />
			<path d="M5 18h5v4h-5z" />
			<path d="M5 10h5v4h-5z" />
			<path d="M10 12h5" />
			<path d="M7.5 6v4" />
			<path d="M7.5 14v4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSchemaIcon.displayName = "TablerSchemaIcon";
}
