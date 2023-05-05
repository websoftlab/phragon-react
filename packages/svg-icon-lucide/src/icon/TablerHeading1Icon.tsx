import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHeading1IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHeading1Icon = React.forwardRef<SVGSVGElement, TablerHeading1IconProps>(function TablerHeading1Icon(
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
			<path d="M4 12h8" />
			<path d="M4 18V6" />
			<path d="M12 18V6" />
			<path d="m17 12 3-2v8" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerHeading1Icon.displayName = "TablerHeading1Icon";
}
