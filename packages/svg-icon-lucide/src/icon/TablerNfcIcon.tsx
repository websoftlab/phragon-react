import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerNfcIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerNfcIcon = React.forwardRef<SVGSVGElement, TablerNfcIconProps>(function TablerNfcIcon(props, ref) {
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
			<path d="M6 8.32a7.43 7.43 0 0 1 0 7.36" />
			<path d="M9.46 6.21a11.76 11.76 0 0 1 0 11.58" />
			<path d="M12.91 4.1a15.91 15.91 0 0 1 .01 15.8" />
			<path d="M16.37 2a20.16 20.16 0 0 1 0 20" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerNfcIcon.displayName = "TablerNfcIcon";
}
